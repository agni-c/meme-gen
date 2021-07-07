const Templates = ({ template, setMeme, setForm, id, form }) => {
	return (
		<img
			className='meme-img'
			src={template.url}
			onClick={() => {
				setMeme(template);
				setForm({ ...form, template_id: id });
			}}
			alt='meme'
		/>
	);
};

export default Templates;
