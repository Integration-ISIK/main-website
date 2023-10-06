<script>
	import { FirebaseApp } from 'sveltefire';
	import Header from './Header.svelte';

	import { auth, firestore, storage } from "$lib/firebase";

	import "../app.css";
</script>

<FirebaseApp {auth} {firestore} {storage}>
	<div class="w-full h-full">
		<Header />
	
		<main>
			<slot />
		</main>
	</div>	
</FirebaseApp>