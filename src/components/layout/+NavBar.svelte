<script>
    // Import statements for icons or other components if needed

    import UserBlock from './+UserBlock.svelte'
    import ThemeSwitch from '../ui/+ThemeSwitch.svelte'

</script>

<aside class={"md:hidden lg:flex flex-col  h-screen border-r border-gray-100 dark:border-zinc-700 bg-white dark:bg-zinc-900 dark:text-gray-50 "}>
    <div class="n flex flex-col flex-grow p-4">
        <span class="flex flex-row items-center justify-between font-bold text-xl mb-4 ">kood/Johvi <ThemeSwitch/> </span>


        <a href="/dash" class="mb-2 p-2">Dashboard</a>
        <a href="/study" class="mb-2 p-2">Study</a>
        <a href="/progress" class="mb-2 p-2">Progress tracker</a>
        <a href="/badges" class="mb-2 p-2">badges</a>

    </div>


    <div class="mt-auto">
        <UserBlock/>
    </div>
</aside>