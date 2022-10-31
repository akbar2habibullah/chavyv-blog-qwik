import { component$, useMount$, useStore } from '@builder.io/qwik'
import { Link, StaticGenerateHandler, useLocation } from '@builder.io/qwik-city'
import { NotionRenderer } from 'react-notion'
import axios from 'axios'

export default component$(() => {
	const {
		params: { id, page, date },
	} = useLocation()

	const store = useStore({
		blog: null,
	})

	useMount$(async () => {
		const { data } = await axios.get(`https://notion-api.splitbee.io/v1/page/${id}`)

		store.blog = data
	})

	return (
		<div class=''>
			<h1 class=''>{page}</h1>
			<h5 class=''>Posted on {date}</h5>
			<div class=''>
				<NotionRenderer blockMap={store.blog} />
			</div>
			<Link href='/'>
				<h4 class=''>Back</h4>
			</Link>
		</div>
	)
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
	const { data } = await axios.get(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`)

	return {
		params: data.map
			.filter((post: any) => post.published)
			.map((post: any) => {
				return {
					id: post.id,
					page: post.page,
					date: post.date,
				}
			}),
	}
}
