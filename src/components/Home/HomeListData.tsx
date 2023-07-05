type Props = {
    items:any;
};
const HomeListData = (props: Props) => {
	return (
		<>
			<h1>{props.items?.name}</h1>
		</>
	);
};

export default HomeListData;
