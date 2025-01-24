import { createClient } from '@supabase/supabase-js'

interface StaffMember {
    id: string;
    displayname: string;
    role: string;
    title: string;
    flags: string;
    gravatar: string;
    website: string;
    owner: boolean;
    admin: boolean;
    dev: boolean;
    org: boolean;
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const staffRoles = [] as { name: string, members: StaffMember[] }[];
    const supabase = createClient('https://xbrshjvntcletdswsxtq.supabase.co', runtimeConfig.SUPABASE_SERVICE_KEY);
    const { data, error } = await supabase
        .from('staff')
        .select('*')
        .eq('isstaff', true)
        .order('id', { ascending: true });
    for (const staff of data as StaffMember[]) {
        if (staffRoles.findIndex(role => role.name === staff.role) === -1) {
            staffRoles.push({ name: staff.role, members: [] });
        }
        const index = staffRoles.findIndex(role => role.name === staff.role);
        const [owner, admin, dev] = staff.flags.split(':').map(flag => flag === '1');
        staffRoles[index].members.push(Object.assign(staff, {
            owner,
            admin,
            dev,
            org: staff.role === 'Business Partners',
        }));
    }
    return staffRoles;
})