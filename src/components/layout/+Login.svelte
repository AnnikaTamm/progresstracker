
<script>
    import  { Input, Button, Card } from 'flowbite-svelte';
    import "../../app.css"
</script>
    <div class="grid lg:grid-cols-6 mt-16 grid-cols-3 m-4">

        <Card class="col-span-3 dark:bg-zinc-800">
            <div class="space-y-4 w-full">
                    <Input id="default-input"  placeholder="Name" />
                    <Input id="default-input" placeholder="Password" />

                    <Button class={"p-4 text-md font-bold text-zinc-800 bg-custom-green border-transparent justify-center hover:bg-zinc-800 hover:border hover:border-custom-green hover:text-custom-green"} href="/dash">Log in</Button>


            </div>
        </Card>



    </div>
