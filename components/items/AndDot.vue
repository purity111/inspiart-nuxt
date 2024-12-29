<template>
    <div class="special-and">
      <img
        src="/img/common/star-8.svg"
        alt="SNS"
        width="17"
        height="17"
        loading="lazy"
        decoding="async"
      />
      <p>&</p>
      <img
        src="/img/common/star-8.svg"
        alt="SNS"
        width="17"
        height="17"
        loading="lazy"
        decoding="async"
      />
    </div>
  </template>
  
  <style scoped>
  .special-and {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .special-and>p{
    font-family: 'Satoshi-BoldItalic', sans-serif;
    font-size: 72px;
    line-height: 1.3;
    color: transparent;
    -webkit-text-stroke: 1px #c2b4a1;
  }
  .special-and::before,
  .special-and::after {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: #c2b4a1;
  }
  </style>
  