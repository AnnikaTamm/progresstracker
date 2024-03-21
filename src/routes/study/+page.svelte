<script>
    import MenuBar from "../../components/layout/+MenuBar.svelte";
    import ProgressBar from "../../components/ui/+ProgressBar.svelte";
</script>
<div class="relative">
    <div class="">
        <MenuBar/>
        <ProgressBar/>
    </div>

        <div class="bg-gray-50 dark:bg-zinc-900  grid grid-cols-6 gap-6 lg:mx-16 mx-4 mt-8">
            <div class="col-span-6">
                <h1 class="mb-8">study</h1>
            </div>
            <div class="col-span-6 lg:col-span-2 space-y-6 x">
                <div class="col-start-1 col-span-3  rounded p-4 bg-white dark:bg-custom-teal">
                    <h2>Lorem</h2>
                    <p class="font-poppins">place filler</p>
                </div>
                <div class="col-start-1 col-span-3 rounded p-4 bg-white dark:bg-custom-teal">
                    <h2>Lorem</h2>
                    <p>place filler</p>
                </div>
                <div class="col-start-1 col-span-3 rounded p-4 bg-white dark:bg-custom-teal">
                    <h2>Lorem</h2>
                    <p>place filler</p>
                </div>
            </div>
            <div class="col-span-6 lg:col-span-4 ">
                <div class="col-span-6 xl:col-span-4 rounded p-6 bg-white dark:bg-custom-teal  space-y-6">
                    <h1>Go Module</h1>
                    <h2>Welcome back</h2>
                    <p>Congratulations, well done for making it this far. You've overcome some obstacles, and there are plenty more exciting challenges ahead.</p>
                    <p>You have already learned the basics of the Go programming language, but now it is time to apply your knowledge towards implementing larger and more challenging projects.</p>
                    <h2>What you'll learn</h2>
                    <ul class="list-disc ml-4">
                        <li class="dark:bg-custom-teal">Complex command line arguments</li>
                        <li class="dark:bg-custom-teal">Programmatic file-system navigation</li>
                        <li class="dark:bg-custom-teal">Reading & writing to files</li>
                        <li class="dark:bg-custom-teal">Parsing data</li>
                        <li class="dark:bg-custom-teal">Basic web applications (without JavaScript)</li>
                        <li class="dark:bg-custom-teal">Consuming APIs</li>
                        <li class="dark:bg-custom-teal">Basic Relational databases</li>
                        <li class="dark:bg-custom-teal">Advanced algorithms</li>
                    </ul>
                    <h2>Task completion</h2>
                    <h3>Functional requirements</h3>
                    <p>This describes the minimum functionality which you must implement within your projects, and they must work exactly as described in order to pass your reviews.</p>
                    <h3>Extra requirements</h3>
                    <p>These will only be evaluated once your functional requirements have been achieved. Extras are things which you may choose to implement within your projects. They'll be specifically evaluated, and must work as described to achieve extra points. If these do not function as required, you won't get those extra points, but your project will still pass the review.</p>
                    <h3>Bonus functionality</h3>
                    <p>While completing your tasks, you're welcome to implement additional features beyond what is described as functional or extra requirements. You can show flare, improve the user experience, increase efficiency etc.</p>
                    <p>The task may propose some bonuses, purely to spark imagination. You're welcome to implement any bonuses of your choosing. You'll achieve a higher grade by doing so, depending on how impressive they are.</p>
                    <p>During your review, it is vital that your project works as described in the task description. You are encouraged to implement feature toggles to switch your bonus functionality on or off. You may do so using a different build, additional command line arguments, or some toggle in a user interface.</p>
                    <h3>Allowed packages</h3>
                    <p>You must only implement your projects using the Go Standard Library. You can use additional packages only if:</p>
                    <ul class="list-disc ml-4">
                        <li class="dark:bg-custom-teal">The task description specifically permits additional libraries or packages.</li>
                        <li class="dark:bg-custom-teal">The additional libraries or packages only enable your bonus functionality to work. If you use additional packages for this purpose, you'll need to show that these power only your bonuses.</li>
                    </ul>
                </div>

            </div>





        </div>
</div>
