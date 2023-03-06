# JS Combinations

The objetive of this repo is to generate all possible combinations of a given matrix. Also some tricks with ChatGPT integration 😉

## Installing the dependencies

Some dependencies were used on these scripts. to make sure you meet all the requirements, it is important to restore the packages using `yarn install` or `npm install` before calling the scripts.

## Running the `randomizeFiles` script

To run the script you can use the following:

`node ./randomizeFiles ./sampleLists/list1.txt ./sampleLists/list2.txt ./sampleLists/list3.txt ./new-random-file.txt`

Or if you want to use the sample files, you can run `yarn run-sample-script`

## ChatGPT integration

To use the ChatGPT integration, you have to create an `.env` file in the project root folder with the following content:

`OPENAI_API_KEY="your_api_key"`

You can get an OpenAI API Key at [API Keys page](https://platform.openai.com/account/api-keys)
