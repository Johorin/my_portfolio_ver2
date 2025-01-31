const TopThumbnailBlock = () => {
	// TODO: 自分の写真をスライドショー形式で背景に入れる
	return (
		<div className="
			top-thumbnail-block
			bg-black
			h-[calc(100vh-64px)]
			mt-[64px]
			flex flex-col items-center justify-center
		">
			<h1 className="
				top-thumbnail-text-h1
				text-[#1E1E1E]
				text-8xl
				font-bold
				text-center
			">
				WELCOME
			</h1>
			<h2 className="
				top-thumbnail-text-h2
				text-[#757575]
				text-5xl
				text-center
			">
				This is Yuya Hojo&apos;s Portfolio.
			</h2>
		</div>
	)
};

export default TopThumbnailBlock