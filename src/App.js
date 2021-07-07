import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import MemeEdit from './components/MemeEdit';
import Templates from './components/Templates';

function App() {
	const [templates, setTemplates] = useState([]);
	const [meme, setMeme] = useState();

	//form
	const [form, setForm] = useState({
		template_id: '',

		username: 'teasty',
		password: 'PPS$Asr52ttCfaF',
	});

	const paramsSetter = obj => {
		const paramArr = Object.entries(obj).map(
			([key, value]) => `${key}=${value}`
		);
		return '?' + paramArr.join('&');
	};

	const getCustomMeme = async e => {
		e.preventDefault();
		try {
			const res = await axios.get(
				`https://api.imgflip.com/caption_image${paramsSetter(form)}`
			);
			console.log('meme log', res.data.data.url);
			setMeme({ ...meme, url: res.data.data.url });
		} catch (error) {
			console.log(error);
		}
	};

	const loadData = async () => {
		const res = await axios.get('https://api.imgflip.com/get_memes');
		setTemplates(res.data.data.memes);
	};

	useEffect(() => {
		loadData();
	}, []);
	console.log(meme);
	return (
		<div className='App'>
			<h1>Meme Gen</h1>
			<div className='meme-container'>
				{meme ? (
					<MemeEdit
						meme={meme}
						setMeme={setMeme}
						getCustomMeme={getCustomMeme}
						form={form}
						setForm={setForm}
					/>
				) : templates.length > 0 ? (
					templates.map(template => (
						<Templates
							template={template}
							id={template.id}
							setMeme={setMeme}
							form={form}
							setForm={setForm}
						/>
					))
				) : null}
			</div>
		</div>
	);
}

export default App;
