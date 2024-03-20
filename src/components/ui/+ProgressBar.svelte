<script>
    const items = Array.from({ length: 25    }, (_, i) => i);
</script>

<div class="lg:mx-16 mx-4 mt-4">
    <div class="flex justify-between items-center border-2 border-custom-green rounded-3xl px-2.5 py-1">
        <div class=" flex flex-row">
            {#each items as item}
                <svg  class="mr-[-6px]" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L1 29H5L16 1H12Z" fill="#DCF900" stroke="#DCF900"/>
                </svg>
            {/each}
        </div>

        <div>
            <p class="font-medium">25%</p>
        </div>
    </div>
    <div class="flex flex-col items-end space-y-2 pt-8">
        <div>
            <p>Time left to finish the module</p>
        </div>
        <div>
            <h2 class="dark:text-custom-green">1y 2m 3d 4h 5min</h2>
        </div>


    </div>
</div>