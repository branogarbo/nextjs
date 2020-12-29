// import Sketch from 'react-p5'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

export default function Home() {
	let Sketch;

	useEffect(() => {
		Sketch = dynamic(()=>{
			import('react-p5').then(p5 => p5.Sketch);
		})
	}, []);
		
	let setup = (p5, canvasParentRef) => {
		p5.createCanvas(350 ,350).parent(canvasParentRef);
	}

	let draw = p5 => {
		p5.circle(175, 175, 175);
	}

	return (
		<Sketch setup={setup} draw={draw} />
	)
}
