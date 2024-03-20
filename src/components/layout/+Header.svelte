<script>
    import {Dropdown, DropdownItem, DropdownDivider, DropdownHeader, Navbar} from 'flowbite-svelte';
    import { page } from '$app/stores';
    import ThemeSwitch from "../ui/+ThemeSwitch.svelte";
    $: activeUrl = $page.url.pathname;
</script>


<div class="relative z-20 flex flex-row justify-between items-center px-4 inset-0">
    <span class="flex flex-row items-center gap-2 font-bold text-xl text-gray-800 dark:text-gray-50">kood/Jõhvi <ThemeSwitch/></span>
    <div class="">
        <button >
        <svg height="32px"  width="32px" ><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
            <Dropdown {activeUrl} class="min-w-48 justify-items-start">
                <DropdownItem href="/dash" class="px-8 py-4">Dashboard</DropdownItem>
                <DropdownItem href="./study" class="px-8 py-4">Study</DropdownItem>
                <DropdownItem href="./progress" class="px-8 py-4">Progress tracker</DropdownItem>
                <DropdownItem href="./profile" class="px-8 py-4">Profile</DropdownItem>
                <DropdownItem href="./" class="px-8 py-4">Log out</DropdownItem>
            </Dropdown>
        </button>
    </div>

</div>

