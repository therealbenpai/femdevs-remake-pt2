export default defineEventHandler(async (event) => {
    class ResourceData {
        uptime: number;
        status: 'up' | 'down' | 'degraded' | 'maintenance';
        constructor(data: { availability: number, status: 'up' | 'down' | 'degraded' | 'maintenance' }) {
            this.uptime = data.availability;
            this.status = data.status;
        }
    }

    const runtimeConfig = useRuntimeConfig(event);
    const base = 'api/v2/status-pages/195665/resources';
    const response = await fetch(`https://betteruptime.com/${base}`, {
        headers: {
            Authorization: `Bearer ${runtimeConfig.betterStack.token}`,
        },
    }).then(res => res.json());
    const resourceIDs = response.data.map((obj: any) => obj.id);
    const resources = [] as ResourceData[];
    for (const id of resourceIDs) {
        const { data: { attributes: attr } } = await fetch(`https://uptime.betterstack.com/${base}/${id}`, {
            headers: {
                Authorization: `Bearer ${runtimeConfig.betterStack.token}`,
            },
        }).then(res => res.json());
        resources.push(new ResourceData(attr));
    }
    const keyMap = { 'up': 1, 'down': 2, 'degraded': 3, 'maintenance': 4 };
    const result = {
        agrStatus: resources.reduce((prev, dat) => {
            if (prev === 2 || keyMap[dat.status] === 2) return 2;
            if (prev === 3 || keyMap[dat.status] === 3) return 3;
            if (prev === 4 || keyMap[dat.status] === 4) return 4;
            return 1;
        }, 1),
        uptime: resources.reduce((prev, { uptime }) => prev + uptime, 0) / resources.length,
    };
    return result;
})