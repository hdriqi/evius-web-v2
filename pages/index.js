import Head from 'next/head'

const Home = () => {
	return (
		<div>
			<Head>
				<title>Evius — Building Web 3.0</title>
				<link rel="icon" href="/favicon.ico"></link>
				<meta name="title" content="Evius — Building Web 3.0" />
				favicex
				<meta
					name="description"
					content="We create projects that leverage the blockchain and decentralized technology."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://evius.id/" />
				<meta property="og:title" content="Evius — Building Web 3.0" />
				<meta
					property="og:description"
					content="We create projects that leverage the blockchain and decentralized technology."
				/>
				<meta property="og:image" content="/preview.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://evius.id/" />
				<meta property="twitter:title" content="Evius — Building Web 3.0" />
				<meta
					property="twitter:description"
					content="We create projects that leverage the blockchain and decentralized technology."
				/>
				<meta property="twitter:image" content="/preview.png" />
			</Head>
			<div className="m-auto max-w-2xl">
				<div className="flex items-center min-h-screen p-4 relative">
					<div className="relative z-10">
						<div
							className="w-56 h-56 rounded-full m-auto"
							style={{
								backgroundColor: `#818FD4`,
							}}
						></div>
						<h1 className="text-3xl mt-8 md:text-5xl font-bold">
							Building Web 3.0
						</h1>
						<h4 className="text-lg mt-2 text-gray-900">
							Evius create projects that leverage the blockchain and
							decentralized technology.
						</h4>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
