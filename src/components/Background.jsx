import React, { useState, useEffect } from 'react';

const Background = ()=>{

	const [dimension, setDimension] = useState(380);

	useEffect(()=>{
		if(window.innerWidth <= 460){
			setDimension(window.innerWidth * 1.45)
		}
		else{
			setDimension(603.17)
		}
		window.addEventListener("resize", ()=>{
			if(window.innerWidth <= 460){
				setDimension(window.innerWidth * 1.45)
			}
			else{
				setDimension(603.17)
			}
		})
	}, [])

	return(

		<div className="bg">
			<span className="bg__earth" style={{height: `${dimension}px`, width: `${dimension}px`, top: `${dimension / -2}px`, right: `${dimension / -2}px`}}>
				<span className="bg__earth--texture"></span>
				<span className="bg__earth--clouds"></span>
				<span className="bg__earth--mask"></span>
			</span>
		</div>

	)
}

export default Background;