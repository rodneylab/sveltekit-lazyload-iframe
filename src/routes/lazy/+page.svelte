<div class="container">
  <div class="content">
    <h1>Tokyo 2021 Highlights: Loading Lazy</h1>

    <h2>Day One</h2>
    <div class="video-container">
      <iframe
        class="video-iframe"
        loading="eager"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Hr_1VTJ6JLU"
        title="Tokyo 2021 Highlights: Day One"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <h2>Day Two</h2>
    <div class="video-container">
      <iframe
        class="video-iframe"
        loading="lazy"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/EQ8x3xy3-Ew"
        title="Tokyo 2021 Highlights: Day Two"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <h2>Day Three</h2>
    <div class="video-container">
      <iframe
        class="video-iframe"
        loading="lazy"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Zd8T3Ng3DXI"
        title="Tokyo 2021 Highlights: Day Three"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <h2>Day Four</h2>
    <div class="video-container">
      <iframe
        class="video-iframe"
        loading="lazy"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/TZmijZpqha0"
        title="Tokyo 2021 Highlights: Day Four"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <h2>Day Five</h2>
    <div class="video-container">
      <iframe
        class="video-iframe"
        loading="lazy"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/5s6QW-IDV4g"
        title="Tokyo 2021 Highlights: Day Five"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    background-color: rgb(187, 25, 25);
    color: #fff;
    margin: 0;
    padding: $spacing-4 0 $spacing-12;
  }
  .content {
    display: flex;
    flex-direction: column;
    max-width: $max-width-container-md;
    width: 100%;
    margin: 0 auto;

    h1 {
      text-align: center;
    }
  }
  .video-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: $spacing-4 auto;
    padding-top: 56.25%; /* 16:9 aspect ratio */
  }

  .video-iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: $max-width-container-md) {
    .container {
      padding: 0 $spacing-4;
    }
  }
</style>
