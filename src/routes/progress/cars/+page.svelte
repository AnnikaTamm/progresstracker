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
        <div class="grid col-span-2 p-4 ">
            <div class="lg:col-span-2 col-span-1">
                <p class="font-medium text-lg mb-16">You are currently working on cars task</p>
            </div>
            <div class="col-span-1 md:mb-4">
                <h2>cars</h2>
                <p class="font-bold">cars-viewer</p>
                <a href="https://study-test.kood.tech/studies/tasks/2780" class="font-medium text-green-700 dark:text-custom-green  w-1/4 border-b border-transparent hover:bg-transparent hover:border-b hover:border-custom-green">Task details</a>
                <p class="leading-8 ml-2">Team size: 2 <br>

                    Marju Maasikas<br>
                    Kaur Kuslap<br>
                </p>
                <p class="mt-2">Points earned 0 out of 800</p>
            </div>
            <div class="col-span-1">
                <p class="font-medium leading-8">Reviews by: <br>
                    No reviews available</p>
            </div>


        </div>

    </div>

</div>






