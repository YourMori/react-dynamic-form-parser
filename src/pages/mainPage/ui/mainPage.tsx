import { FileLoader } from '@/entites/FileLoader';
import { DynamicParser } from '@/widgets/dynamicParser';
import './mainPage.scss';
import { Modal } from '@/widgets/modal';

export const MainPage = () => {
	return (
		<div className='main'>
			<div className='main__header'>
				<FileLoader />
			</div>
			<div className='main__section'>
				<DynamicParser />
				<Modal />
			</div>
		</div>
	);
};
