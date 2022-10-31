import { component$ } from '@builder.io/qwik'

export default component$(() => {
	return (
		<div>
			<header class=''>
				<h1 class=''>
					Chavyv<span class=''>.</span>Blog
				</h1>
				<img class='foto-profil' src='https://media.graphassets.com/sTfo5Du5TZyjaoWm1gK1' alt='foto profil' />
				<p>Welcome to my blog! This is my place to share something about my life or random thoughts. Hope you enjoy this content!</p>
			</header>
			<footer class=''>
				Made with
				<a href='https://qwik.builder.io/' target='_blank' rel='noreferrer'>
					Qwik
				</a>
				, &
				<a href='https://ajusa.github.io/lit/' target='_blank' rel='noreferrer'>
					lit
				</a>
				. Source available on
				<a href='https://github.com/akbar2habibullah/chavyv-blog-qwik' target='_blank' rel='noreferrer'>
					GitHub
				</a>{' '}
				<br />
				Copyright © {new Date().getFullYear()}
				<a href='https://www.chavyv.xyz/' target='_blank' rel='noreferrer'>
					Chavyv Akvar
				</a>
				. All Rights Reserved
			</footer>
		</div>
	)
})
