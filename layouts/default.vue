<script setup lang="ts">
const {localeProperties} = useI18n();
const {dir} = localeProperties.value;
</script>


<template>
    <div class="absolute size-full top-0 left-0">
    <div class="bg-neutral-200">
      <nav
        class="sticky top-0 z-30 flex flex-row items-center justify-center bg-white"
      >
        <div
          class="flex w-full max-w-6xl flex-row items-center justify-between p-8"
        >
          <img class="h-12" src="/logos/default.svg" alt="FemDevs Logo" />
          <div class="hidden flex-row items-center space-x-6 md:flex">
            <NavLink href="/">{{ $t("nav.home") }}</NavLink>
            <NavLink href="/about">{{ $t("nav.about") }}</NavLink>
            <NavLink href="/team">{{ $t("nav.team") }}</NavLink>
            <NavLink href="mailto:support@thefemdevs.com">{{
              $t("nav.contact")
            }}</NavLink>
          </div>
        </div>
      </nav>
      <div :dir="dir">
        <slot></slot>
      </div>
      <footer
        class="flex w-full justify-center bg-neutral-900 p-12 text-neutral-100"
      >
        <div
          class="flex w-full max-w-6xl flex-col space-y-8 divide-y divide-neutral-700 px-8"
        >
          <div
            class="flex flex-col justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0"
          >
            <div class="flex flex-col space-y-2">
              <h2 class="select-none font-poppins text-xl font-medium">
                {{ $t("footer.header.about") }}
              </h2>
              <div class="flex flex-col space-y-0">
                <FooterLink href="/about">
                  {{ $t("footer.links.about.about") }}
                </FooterLink>
                <FooterLink href="/team">
                  {{ $t("footer.links.about.team") }}
                </FooterLink>
                <FooterLink href="/products">
                  {{ $t("footer.links.about.products") }}
                </FooterLink>
              </div>
            </div>
            <div class="flex flex-col space-y-2">
              <h2 class="select-none font-poppins text-xl font-medium">
                {{ $t("footer.header.community") }}
              </h2>
              <div class="flex flex-col space-y-0">
                <FooterLink href="https://discord.gg/FgQvDW8jtr">
                  Discord
                </FooterLink>
                <FooterLink href="https://x.com/officialfemdevs">
                  Twitter
                </FooterLink>
                <FooterLink href="https://instagram.com/officialfemdevs">
                  Instagram
                </FooterLink>
                <FooterLink href="https://tiktok.com/@femdevs">
                  TikTok
                </FooterLink>
                <FooterLink href="https://reddit.com/r/femdevs">
                  Reddit
                </FooterLink>
              </div>
            </div>
            <div class="flex flex-col space-y-2">
              <h2 class="select-none font-poppins text-xl font-medium">
                {{ $t("footer.header.company") }}
              </h2>
              <FooterHeader title="{strings.footer.header.company}" />
              <div class="flex flex-col space-y-0">
                <FooterLink href="/branding">
                  {{ $t("footer.links.company.branding") }}
                </FooterLink>
                <FooterLink href="/careers">
                  {{ $t("footer.links.company.careers") }}
                </FooterLink>
                <FooterLink
                  href="mailto:support@thefemdevs.com"
                  :extraAttributes="{ rel: `noreferrer`, target: `_blank` }"
                >
                  {{ $t("footer.links.company.contact") }}
                </FooterLink>
              </div>
            </div>
            <div class="flex flex-col space-y-2">
              <FooterHeader>
                {{ $t("footer.header.legal") }}
              </FooterHeader>
              <FooterHeader title="{strings.footer.header.legal}" />
              <div class="flex flex-col space-y-0">
                <FooterLink href="/legal/terms">
                  {{ $t("footer.links.legal.terms") }}
                </FooterLink>
                <FooterLink href="/legal/privacy">
                  {{ $t("footer.links.legal.privacy") }}
                </FooterLink>
                <FooterLink href="/legal/cookies">
                  {{ $t("footer.links.legal.cookies") }}
                </FooterLink>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between pt-8">
            <h2 class="select-none font-poppins text-lg">
              FemDevs &copy; 2024
            </h2>
            <div class="flex flex-row items-center justify-center space-x-4">
              <StatusOrb />
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>