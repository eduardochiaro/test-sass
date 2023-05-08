import '../app/globals.scss'
import Component from '../app/Component';

export default function test () {
  return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			This page use `pages` folder
			<Component/>
		</main>
	)
}