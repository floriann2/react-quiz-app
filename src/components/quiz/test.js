import React from 'react';

class ClassComponent extends React.Component {
	render (){
		return (
			<h1>Hello from Class Component</h1>
		);
	}
}

const FunctionalComponent = (props) => {
	return (
		<h1>Hello {props.name}</h1>
	);
};
export { FunctionalComponent, ClassComponent };