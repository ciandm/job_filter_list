# This is an app created with designs from frontendmentor.io

## What it does

Users can select filters by clicking on the tag on the card displaying the job. This will add the clicked tag to the filter list at the top of the page. These filters can be removed by selecting "X" on each filter.

### How it works

The state consists of a filter object, with the role (string), level (string), languages (array) & tools(array). Whenever a user clicks a tag above, the relevant object key:value pair is updated to include this tag. To filter the cards, a function reduces this filter state as well as the tags on each card to be displayed down to 2 separate arrays. With these 2 arrays, array.every() is called to check whether or not every item within the reduceed filter state is present on the item tags. If this returns true, the card is output to the screen.