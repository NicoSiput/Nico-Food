import {
  createDataNotFoundPage, createNetworkErrorPage, create404Page,
} from '../views/templates/template-creator';

const renderNoFavoritePage = () => {
  const containerMain = document.querySelector('#main');

  const content = {
    title: 'NO FAVORITE DATA',
    text: "Hi, currently you don't have some favorite restaurant. Don't be sad, just explore our restaurant and choose your favorite!",
    buttonText: 'Explore Now !',
  };
  containerMain.innerHTML = createDataNotFoundPage(content);
};
const renderDataNotFound = () => {
  const containerMain = document.querySelector('main');

  const content = {
    title: 'NO RESULTS !',
    text: "We searched far and wide and couldn't find any data matching your needed",
    buttonText: 'Find Another',
  };
  containerMain.innerHTML = createDataNotFoundPage(content);
};

const renderNetworkErrorPage = () => {
  const containerMain = document.querySelector('main');
  const content = {
    title: 'Ooops!',
    text: 'Slow or no internet connection. Please check your internet settings',
    buttonText: 'Relaod',
  };
  containerMain.innerHTML = createNetworkErrorPage(content);
};

const render404Page = () => {
  const containerMain = document.querySelector('main');
  const content = {
    title: "UH OH! You're lost.",
    text: 'The page you are looking for doest not exist. How you got here is a mystery. But you can click the button bellow to go back to the homepage',
    buttonText: "Let's Go Home",
  };
  containerMain.innerHTML = create404Page(content);
};

export {
  renderDataNotFound, renderNetworkErrorPage, render404Page, renderNoFavoritePage,
};
