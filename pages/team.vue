<script setup lang="ts">
const { data: staffRoles } = await useFetch('/api/team')
const iconClasses = 'inline-block size-6 relative bottom-0 text-brand-black'
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex w-full max-w-6xl flex-col space-y-8 p-8 md:my-16">
            <div class="flex w-full flex-col space-y-4">
                <h1
                    class="select-none font-poppins text-5xl font-medium text-neutral-900"
                >
                    The Team
                </h1>
                <h2 class="select-none font-poppins text-xl text-neutral-900">
                    {{ $t('team.desc') }}
                </h2>
            </div>
            <div
                v-for="role in staffRoles"
                :key="role.name"
                class="flex flex-col space-y-6"
            >
                <h3
                    class="select-none font-poppins text-3xl font-medium text-neutral-900"
                >
                    {{ role.name }}
                </h3>
                <div
                    class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
                >
                    <a
                        v-for="member in role.members"
                        :key="member.id"
                        class="group flex flex-col rounded-xl bg-white transition-all hover:ring-1 hover:ring-brand-black hover:drop-shadow-xl"
                        :href="member.website"
                    >
                        <img
                            class="h-32 rounded-t-xl object-cover transition-all"
                            :src="`https://thefemdevs.com/assets/images/grav/${member.gravatar}`"
                            :alt="`${member.displayname}'s profile picture`"
                            type="image/webp"
                            loading="lazy"
                        />
                        <div class="space-y-1 p-4">
                            <h4
                                class="select-none font-poppins text-xl font-medium text-neutral-900 flex gap-3 items-center"
                            >
                                {{ member.displayname }}
                                <span class="flex gap-[6px] items-center">
                                    <Icon
                                        v-if="member.owner"
                                        name="tabler:crown"
                                        :class="iconClasses"
                                        alt="Owner"
                                        title="Owner"
                                    />
                                    <Icon
                                        v-if="member.admin && !member.owner"
                                        name="material-symbols:add-moderator-outline"
                                        :class="iconClasses"
                                        alt="Admin"
                                        title="Admin"
                                    />
                                    <Icon
                                        v-if="member.dev && !member.owner"
                                        name="tabler:user-cog"
                                        :class="iconClasses"
                                        alt="Developer"
                                        title="Developer"
                                    />
                                    <Icon
                                        v-if="member.org"
                                        name="tabler:building-skyscraper"
                                        :class="iconClasses"
                                        alt="Organization"
                                        title="Organization"
                                    />
                                </span>
                            </h4>
                            <h5
                                class="select-none font-poppins text-lg text-neutral-600"
                            >
                                {{ $t(`team.roles.${member.title}`) }}
                            </h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
