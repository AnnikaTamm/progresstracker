<script>
	import Header from '../components/layout/+Header.svelte'
	import '../app.css'
</script>
<svelte:head>
	<title>uiux proovikas</title>
	<meta name="description" content="uiux proovikas" />
</svelte:head>

	<div class="h-full min-h-screen text-zinc-900 dark:text-gray-50 bg-gray-50 dark:bg-zinc-900 transition-all ">
		<div>

		</div>
		<div class="flex flex-col ">

			<main class="h-full">
				<div class="relative z-10 top-0 bg-white dark:bg-zinc-900 py-2 dark:border-b dark:border-zinc-700 lg:hidden shadow">
					<Header/>
				</div>
				<slot />

			</main>
		</div>
	</div>


