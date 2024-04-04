# Piotr Kulcenty Portfolio Website

This is a portfolio website showcasing works of Piotr Kulcenty, violin maker and instrument restorer based in London.
The design was created by [Mariana Alcobia](https://marianaalcobia.com/) from Construct London design studio (shared with Client's permission).

## Why is it here?
Because "there's more to it than meets the eye". 
Image-centric design, the requirement for a pixel-perfect implementation as well as the Client's desire for highest image quality possible - turned into a journey in search of every milisecond to shave on my side.
All of it - pre-loads, lazy-loads, user action predicting, some clever image hashes, you name it - worked in the end. Despite image filesizes being over what I would call "desirable" in other circumstances - the Google Lighthouse score remains on the happy side.
The design is also modular and crafted with a possibility of a future extension in mind. 
Despite looking deceptively simple, almost every element of the interface can be customized, and new elements (such as new instruments in the gallery) can be added with very little effort. 

## How to check it out on your own machine?

Nothing fancy really, just pick up your favorite package manager (in my case it is pnpm) and fire "as usuall":

```bash
pnpm install
pnpm run dev
```
If you prefer other methods: 
```bash
npm ci
npm start
```
will work just fine too.

