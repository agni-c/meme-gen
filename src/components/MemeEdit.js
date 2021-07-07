const MemeEdit = ({ meme, setMeme, getCustomMeme, form, setForm }) => {
	return (
		<div className='meme-edit-container'>
			<img className='meme-image' src={meme.url} alt='meme' />
			<form onSubmit={getCustomMeme} className='memeEditForm'>
				{Array.from({ length: meme.box_count }, (_, i) => (
					<input
						key={i}
						type='text'
						placeholder={` Meme Caption ${i + 1}`}
						onChange={e => setForm({ ...form, [`text${i}`]: e.target.value })}
						className='meme-input'
					/>
				))}
				<div className='action-btns'>
					<button type='submit' className='submit-btn'>
						Create Meme
					</button>
					<button
						onClick={e => {
							e.preventDefault();
							setMeme();
						}}
						className='back-btn'>
						Choose Template
					</button>
				</div>
			</form>
		</div>
	);
};

export default MemeEdit;
