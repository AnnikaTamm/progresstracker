<script>
import ProgressBar from "../../components/ui/+ProgressBar.svelte";
import MenuBar from "../../components/layout/+MenuBar.svelte";
</script>


<div class="relative">
	<div class="">
		<MenuBar/>
		<ProgressBar/>
	</div>


		<div class=" grid grid-cols-6 gap-6 lg:mx-16 mx-4 mt-8">

			<div class="lg:col-span-4 col-span-6 min-h-80 border-b rounded shadow dark:border-zinc-500 p-4 bg-white dark:bg-zinc-700">
				<h2>Inbox</h2>
			</div>

			<div class="lg:col-span-2 col-span-6 border-b rounded shadow dark:border-zinc-500 bg-white dark:bg-zinc-700 flex flex-col justify-evenly items-center">
				<div>
					<h2>My points</h2>
				</div>
				<div>

				</div>
				<div>
					<p>Current score 3000 out of 4300</p>
				</div>
			</div>

			<div class="col-span-6 border-b rounded shadow dark:border-zinc-500 p-4 bg-white dark:bg-zinc-700">
				<h2>Lorem ipsum</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada, magna eget posuere sagittis, nulla eros lobortis sem, a imperdiet purus dui in lectus. Donec et arcu facilisis nibh varius malesuada vel sit amet velit. Vivamus tempus nulla ut sodales ultricies. Maecenas vel leo leo. Sed laoreet hendrerit quam, aliquet consectetur felis accumsan quis. Sed dapibus ligula ac semper sollicitudin.</p>
			</div>

			<div class="col-span-6  border-b rounded shadow dark:border-zinc-500 p-4 bg-white dark:bg-zinc-700">
				<h2>Lorem ipsum</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada, magna eget posuere sagittis, nulla eros lobortis sem, a imperdiet purus dui in lectus. Donec et arcu facilisis nibh varius malesuada vel sit amet velit. Vivamus tempus nulla ut sodales ultricies. Maecenas vel leo leo. Sed laoreet hendrerit quam, aliquet consectetur felis accumsan quis. Sed dapibus ligula ac semper sollicitudin.</p>
			</div>
		</div>
</div>


