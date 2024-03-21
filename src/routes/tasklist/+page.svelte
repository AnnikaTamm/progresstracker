<script>
import ProgressBar from "../../components/ui/+ProgressBar.svelte";
import MenuBar from "../../components/layout/+MenuBar.svelte";
</script>


<div class="relative ">

        <MenuBar/>
        <ProgressBar/>



    <div class="grid grid-cols-6 gap-4 m-4 lg:mx-16 lg:mt-4 ">
        <div class="col-span-6">
            <h3 class="my-4 text-2xl ">Golang module tasks</h3>
        </div>


        <div class="flex flex-row justify-between items-center col-span-6 p-4 bg-white dark:bg-teal-950 text-teal-800 dark:text-teal-800 border-b border-gray-200 dark:border-transparent  shadow-md">
            <div class="flex flex-col">
                <div class="flex flex-row space-x-4">
                    <h2>itinerary</h2>
                    <h2>260/300</h2>
                </div>
                <div class="flex flex-col">

                    <p class="font-bold">itinerary-prettifier</p>
                    <p class="italic text-gray-500 dark:text-teal-800">mandatory</p>
                    <a href="/progress/itinerary" class="hover:bg-transparent">
                        <p class="text-lg font-bold pt-2 dark:text-gray-400"> Click for reviews:</p>
                    </a>
                </div>
            </div>
            <div class="">
                <a href="/progress/itinerary" class="hover:bg-transparent">
                    <p class="font-extrabold text-2xl dark:text-gray-400"> DONE</p>
                </a>
            </div>
        </div>

        <div class="flex flex-row justify-between items-center col-span-6 p-4 bg-white dark:bg-teal-950 text-teal-800 dark:text-teal-800 border-b border-gray-200 dark:border-transparent rounded  shadow-md">
                 <div class="flex flex-col">
                     <div class="flex flex-row space-x-4">
                         <h2>art</h2>
                         <h2>600/600</h2>
                     </div>
                     <div class="flex flex-col">

                         <p class="font-bold">art-decoder</p>
                         <p class="font-bold">art-interface</p>
                         <p class="italic text-gray-500 dark:text-teal-800">mandatory</p>
                         <a href="/progress/art" class="hover:bg-transparent">
                             <p class="text-lg font-bold pt-2 dark:text-gray-400"> Click for reviews:</p>
                         </a>
                     </div>
                 </div>
                 <div class="">
                     <a href="/progress/art" class="hover:bg-transparent">
                         <p class="font-extrabold text-2xl dark:text-gray-400"> DONE</p>
                     </a>
                 </div>
        </div>

        <div class="col-span-6 p-4 bg-custom-blue/50 dark:bg-custom-blue text-teal-800 dark:text-teal-900 border-b border-gray-200 dark:border-transparent rounded flex flex-row justify-between items-center shadow-md">

             <div class="flex flex-col">
                 <div class="flex flex-row space-x-4">
                     <h2>cars</h2>
                     <h2>0/800</h2>
                 </div>
                 <div class="flex flex-col">
                     <p class="font-bold">cars-viewer</p>
                     <p class="italic text-gray-500">mandatory</p>
                     <a href="/progress/cars" class="hover:bg-transparent">
                         <p class="text-lg font-bold pt-2"> Click for reviews:</p>
                     </a>
                 </div>
             </div>
             <div class="">
                 <a href="/progress/cars" class="hover:bg-transparent">
                     <p class="font-extrabold text-2xl">ACTIVE</p>
                 </a>
             </div>
        </div>

        <div class="col-span-6 flex flex-row justify-between items-center text-gray-400 p-4 dark:bg-gray-500 dark:text-gray-800 border-b border-gray-200 dark:border-transparent rounded  shadow-md">
                 <div class="flex flex-col">
                     <div class="flex flex-row space-x-4">
                         <h2>station</h2>
                         <h2>0/1300</h2>
                     </div>
                     <div class="flex flex-col">
                         <p class="font-bold">stations-pathfinder</p>
                         <p class="italic text-gray-400">mandatory</p>
                     </div>
                 </div>
                 <div class="">
                     <a href="/progress/stations" class="hover:bg-transparent">
                         <p class="font-extrabold text-2xl">UNAVAILABLE</p>
                     </a>
                 </div>
        </div>

        <div class="col-span-6 flex flex-row justify-between items-center p-4 text-gray-400 dark:bg-gray-500 dark:text-gray-800 border-b border-gray-200 dark:border-transparent rounded  shadow-md">

             <div class="flex flex-col">
                 <div class="flex flex-row space-x-4">
                     <h2>literary-lions</h2>
                     <h2>0/1300</h2>
                 </div>
                 <div class="flex flex-col">
                     <p class="font-bold">literary-lions-forum</p>
                     <p class="italic text-gray-400">mandatory</p>
                 </div>
             </div>
             <div class="">
                 <a href="/progress/literary-lions" class="hover:bg-transparent">
                     <p class="font-extrabold text-2xl">UNAVAILABLE</p>
                 </a>
             </div>

        </div>

    </div>



</div>
