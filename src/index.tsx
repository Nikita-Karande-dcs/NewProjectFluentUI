import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Spinner, SpinnerSize } from '@fluentui/react';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				{' '}
					<Suspense fallback={<Spinner size={SpinnerSize.medium} />}>
						<Main />
					</Suspense>
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
);
reportWebVitals();
