import * as supabase from "@supabase/supabase-js";

const { format: formatDate } = new Intl.DateTimeFormat('en-US', {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    timeZone: "America/Detroit",
    timeZoneName: "longGeneric",
})

const { format: formatCurrency } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

const RTC = useRuntimeConfig();

const Supabase = supabase.createClient(
    RTC.supabase.url,
    RTC.supabase.serviceKey,
);

export {
    formatDate,
    formatCurrency,
    Supabase,
}
