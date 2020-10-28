Feature('Add Review Restaurant');

Before((I) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-name a');
  I.click(locate('.restaurant-name a').first());
});

Scenario('should rejected to post review when mandatory field is empty', async (I) => {
  I.seeElement('posting-review');

  I.fillField('#inName', '');
  I.fillField('#inReview', '');
  I.click('#submit');

  I.seeElement('.toastify');
  I.see('Please check you input');

  const visibleItemReview = await I.grabNumberOfVisibleElements('item-review');
  I.seeNumberOfElements('item-review', visibleItemReview);
});

Scenario('should add review', async (I) => {
  I.seeElement('posting-review');

  const visibleItemReview = await I.grabNumberOfVisibleElements('item-review');

  I.fillField('#inName', 'Name of Reviewer e2e');
  I.fillField('#inReview', 'Text review e2e');
  I.click('#submit');

  I.seeElement('.toastify');
  I.see('Thank you for your review');

  I.seeNumberOfElements('item-review', visibleItemReview + 1);
});
