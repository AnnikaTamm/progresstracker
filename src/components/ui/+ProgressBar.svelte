<script>
    const items = Array.from({ length: 9    }, (_, i) => i);

    import NavBar from './../layout/+NavBar.svelte'
</script>

<div class="lg:mx-16 mx-4 mt-4 grid grid-cols-2">
    <div class="col-span-2 flex justify-between items-center border-2 border-custom-green rounded-3xl px-2.5 py-1">
        <div class=" flex flex-row">
            {#each items as item}
                <svg  class="mr-[-6px]" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L1 29H5L16 1H12Z" fill="#DCF900" stroke="#DCF900"/>
                </svg>
            {/each}
            <svg class="mr-[-6px]" width="17" viewBox="0 0 17 30" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L1 29H5L16 1H12Z" stroke="#2B2B2B" />
            </svg>
            {#each items as item}
                <svg  class="mr-[-6px]" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L1 29H5L16 1H12Z" fill="#DCF900" stroke="#DCF900"/>
                </svg>
            {/each}
            <svg class="mr-[-6px]" width="17" viewBox="0 0 17 30" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L1 29H5L16 1H12Z" stroke="#2B2B2B"/>
            </svg>
            {#each items as item}
                <svg  class="mr-[-6px]" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L1 29H5L16 1H12Z" fill="#DCF900" stroke="#DCF900"/>
                </svg>
            {/each}

        </div>

        <div>
            <p class="font-medium">30%</p>
        </div>
    </div>
    <div class="col-span-2 flex flex-row  justify-between pt-8">
        <div class="col-span-1">

        <NavBar/>
        </div>
        <div class="col-span-1 flex flex-col items-end space-y-2 ">
            <div class="">
                <p>Time left to finish the module</p>
            </div>
            <div>
                <h2 class="dark:text-custom-green">1y 2m 3d 4h 5min</h2>
            </div>
        </div>



    </div>
</div>