<script>
    import MenuBar from "../../../components/layout/+MenuBar.svelte";
    import ProgressBar from "../../../components/ui/+ProgressBar.svelte";
</script>

<div class="relative lg:m-8 m-4">
    <div class="">
        <MenuBar/>
        <ProgressBar/>
    </div>


    <div class=" grid lg:grid-cols-2 grid-cols-1 lg:mx-16 lg:mt-8 p-4 rounded bg-white dark:bg-gray-700 shadow-2xl">

        <div class="col-span-1 mb-8 p-4">
            <div class="mb-8">
                <h2>art</h2>
                <p class="font-bold">art-decoder</p>
                <p class="italic text-gray-500">mandatory</p>
                <a href="https://study-test.kood.tech/studies/tasks/2779" class="font-medium text-green-700 dark:text-custom-green w-1/4 border-b border-transparent hover:bg-transparent hover:border-b hover:border-custom-green">Task details</a>
                <p class="leading-8 ml-2">Team size: 2 <br>
                    Kaur Kuslap<br>
                    Marju Maasikas<br>
                </p>
                <p class="mt-2">Points earned 300 out of 300</p>
            </div>
            <div>
                <p class="font-bold">art-interface</p>
                <p class="italic text-gray-500">mandatory</p>
                <a href="https://study-test.kood.tech/studies/tasks/2778" class="font-medium text-green-700 dark:text-custom-green  w-1/4 border-b border-transparent hover:bg-transparent hover:border-b hover:border-custom-green">Task details</a>
                <p class="leading-8 ml-2">Team size: 2 <br>
                    Kaur Kuslap<br>
                    Marju Maasikas<br>
                </p>
                <p class="mt-2">Points earned 300 out of 300</p>
            </div>
        </div>

        <div class="col-span-1 p-4">
            <div class="border-b border-gray-400 mb-4">
                <p class="font-medium text-md" >Priit Porgand review:</p>
                <p class="italic">Nicely done, I like the folder structure and how easy it is to navigate the project.</p>
                <p class="italic text-gray-400">Points received: 750 out of 800</p>
            </div>
            <div class="border-b border-gray-400 mb-4">
                <p class="font-medium text-md">Priit Porgand review:</p>
                <p class="italic">Nicely done, I like the folder structure and how easy it is to navigate the project.</p>
                <p class="italic text-gray-400">Points received: 750 out of 800</p>
            </div >
            <div class="border-b border-gray-400 mb-4">
                <p class="font-medium text-md">Kaarel Kaalikas review:</p>
                <p class="italic">I would have like to see ome functions in separate files, such as data fetching in one and rendering data in the other one. Otherwise nice job.</p>
                <p class="italic text-gray-400">Points received: 730 out of 800</p>
            </div>
            <div class="border-b border-gray-400 mb-4">
                <p class="font-medium text-md">Juhan Jõhvikas review:</p>
                <p class="italic">very neat ui, could use some more padding in some places but otherwise a well done project.</p>
                <p class="italic text-gray-400">Points received: 760 out of 800</p>
            </div>
            <div class="border-b border-gray-400 mb-4">
                <p class="font-medium text-md">Bruno Banaan review:</p>
                <p class="italic">Best to remove random console.logs from your code and unnecessary comments, general code clean up before pushing it to audit.</p>
                <p class="italic text-gray-400">Points received: 700 out of 800</p>
            </div >
            <div class="border-b border-gray-400 mb-4">
                <p class="font-medium text-md">Rasmus Rabarber 5 review:</p>
                <p class="italic">Some functions could be re-used.</p>
                <p class="italic text-gray-400">Points received: 730 out of 800</p>
            </div>

        </div>
    </div>




</div>








