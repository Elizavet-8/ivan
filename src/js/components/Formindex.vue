<template>
  <div>
    <form class="summarize__form-index summarize__form">
      <div class="summarize__row"  v-if="activeStep === 1">
          <svg class="summarize__svg" width="90" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.105 54.543a1.08 1.08 0 01-.449-1.81C45.355 32.529 66.901 30.746 67.81 30.68a1.082 1.082 0 01.157 2.155c-.215.015-21.697 1.82-41.802 21.445-.289.283-.697.37-1.06.263z"
                fill="#FFD600" />
              <path
                d="M20.603 58.526a1.079 1.079 0 01-.732-1.342l3.472-11.806a1.08 1.08 0 112.074.61l-2.95 10.028 8.61-2.01a1.08 1.08 0 01.492 2.105l-10.415 2.431a1.082 1.082 0 01-.55-.016z"
                fill="#FFD600" />
          </svg>
          <div class="summarize__file">
              <form id="upload-widget" method="post" action="/upload" class="dropzone">
                <input
                name="file"
                type="file"
                @change="previewImage"
                accept="image/*"
                />
                <p>
                    drag your jpeg <br>or png here
                </p>
                <small>
                    or
                </small>
                <div class="button__container">
                    <button type="button" class="button" @click.prevent="next()">
                      paste text
                    </button>
                </div>
                <div class="summarize__bottom">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12.9.904c-.508-.45-1.33-.448-1.833 0L2.963 8.115c-.979.861.489 2.152 1.468 1.29l6.161-5.417c.205-.18.37-.123.37.128v16.51c0 .504.465.912 1.038.912s1.038-.408 1.038-.912V4.116c0-.25.162-.311.37-.128l6.162 5.418c.978.86 2.446-.43 1.467-1.29L12.9.903zm-6.1 11.26H3.16c-1.437 0-2.6 1.023-2.6 2.285v15.509c0 1.262 1.164 2.285 2.603 2.285h17.674c1.438 0 2.603-1.022 2.603-2.285V14.449c0-1.26-1.166-2.284-2.6-2.284H17.2c-.574 0-1.04.408-1.04.912 0 .505.466.913 1.04.913h3.64c.285 0 .52.206.52.46v15.508c0 .255-.233.46-.523.46H3.163c-.29 0-.523-.206-.523-.46V14.449c0-.255.233-.459.52-.459H6.8c.574 0 1.04-.409 1.04-.913s-.466-.912-1.04-.912z"
                          fill="#009051" />
                    </svg>
                    <p class="summarize__text-gray">select a file from your computer</p>
                </div>
              </form>
          </div>
          <div class="summarize__texts">
              <h5>
                Give it a try, it’s free!
              </h5>
              <p>
                Our learning platform allows you to summarize your academic materials for less reading time!
              </p>
              <p>
                From the text you upload, our AI creates a Study Set complete with the Summary plus
                Flashcards and a Quiz for you to study with. We do that by using an image a book, an academic
                journal pdf or anything really, and our engines do the rest!
              </p>
              <p>
                Upload a file to see for yourself.
              </p>
              <div class="summarize__link">
                Feel free to skip the summary and <a href="singup.html">SIGN UP</a> or <a href="#">LOG IN</a>
                now. &nbsp; :)
              </div>
          </div>
      </div>
      <div class="form-step" v-if="activeStep === 2">
        <div class="form-step__block-text">
          <div class="form-step__prg">
            Historian Lauren Ristvet defines agriculture as the “‘domestication’
            of plants… causing it to change genetically from its wild ancestor
            in ways [that make] it more useful to human consum-ers.”12 She and
            hundreds of other scholars from Hobbes to Marx have pointed to the
            Neolithic Revolution, that is, the move from a hunter-gatherer world
            to an agricultural one, as the root of what we today refer to as
            civilization. Without agriculture we don’t have empires, written
            language, factories, universities, or railroads. Despite its
            importance, much remains unclear about why and where agriculture
            began. Instead, scholars hold a handful of well-regarded theories
            about the roots (pun intended) of agriculture.
          </div>
        </div>
        <div class="form-step__block">
          <div>
            <div class="form-step__title">
              upload a file or paste in text to start our AI summarization
              engines! It’s free.
            </div>
            <div class="form-step__prg">
              <p>
                Our learning platform allows you to summarize your academic
                materials for less reading time!
              </p>
              <p>
                From the text you upload, our AI creates a Study Set complete
                with the Summary plus Flashcards and a Quiz for you to study
                with. We do that by using an image a book, an academic journal
                pdf or anything really, and our engines do the rest!
              </p>
              <p>Upload a file to see for yourself.</p>
            </div>
          </div>
          <div class="form-step__btns">
            <div class="form-step__edit">
              <span>ready to summarize?</span>
              <button
                class="form-step__btn"
                type="button"
                data-toggle="modal"
                data-target="#editText"
              >
                edit text
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3662 3.23185L20.7638 0.638516C19.874 -0.241484 18.429 -0.241484 17.5459 0.638516L2.72104 15.4052C2.69428 15.4318 2.67421 15.4518 2.65414 15.4785C2.64745 15.4852 2.64745 15.4918 2.64076 15.4985C2.62738 15.5185 2.60731 15.5385 2.59393 15.5652C2.58724 15.5718 2.58724 15.5785 2.58055 15.5852C2.56717 15.6052 2.55379 15.6252 2.5471 15.6518C2.54041 15.6585 2.54041 15.6718 2.53372 15.6785C2.52703 15.6985 2.51365 15.7185 2.50696 15.7452C2.50696 15.7518 2.50027 15.7518 2.50027 15.7585L0.0183103 22.7052C-0.102108 23.0452 -0.0151396 23.4252 0.239078 23.6785C0.419706 23.8585 0.660543 23.9518 0.901381 23.9518C1.00842 23.9518 1.11546 23.9318 1.21581 23.8985L8.1934 21.4318C8.20009 21.4318 8.20009 21.4252 8.20678 21.4252C8.22685 21.4185 8.24692 21.4052 8.27368 21.3985C8.28037 21.3918 8.29375 21.3918 8.30044 21.3852C8.32051 21.3718 8.34058 21.3652 8.36734 21.3518C8.37403 21.3452 8.38072 21.3452 8.38741 21.3385C8.40748 21.3252 8.42755 21.3118 8.44762 21.2918C8.45431 21.2852 8.461 21.2852 8.46769 21.2785C8.49445 21.2585 8.52121 21.2385 8.54128 21.2118L20.8909 8.90518L23.3662 6.43852C24.2559 5.55185 24.2559 4.11852 23.3662 3.23185ZM2.44675 21.4852L3.77136 17.7785L6.16635 20.1652L2.44675 21.4852ZM7.87898 19.2252L4.70795 16.0718L15.733 5.09852L18.904 8.25852L7.87898 19.2252ZM22.0416 5.10518L20.2286 6.91852L17.0576 3.75852L18.8705 1.95852C19.0244 1.80518 19.2786 1.80518 19.4392 1.95852L22.0416 4.55185C22.1419 4.65185 22.162 4.77185 22.162 4.83185C22.162 4.89185 22.1486 5.00518 22.0416 5.10518Z"
                    fill="#009051"
                  />
                </svg>
              </button>
            </div>
            <div class="button__container form-button__container">
              <button type="button" class="button" @click.prevent="next()">
                yes, summarize now
              </button>
              <button
                type="button"
                class="button button-black"
                @click.prevent="prev()"
              >
                no, go back and reupload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="form-step form-img" v-if="activeStep === 3">
        <div class="form-step__img" v-if="imageData.length > 0">
          <img class="preview" :src="imageData" />
        </div>
        <div class="form-step__block">
          <div>
            <div class="form-step__title">
              upload a file or paste in text to start our AI summarization
              engines! It’s free.
            </div>
            <div class="form-step__prg">
              <p>
                Our learning platform allows you to summarize your academic
                materials for less reading time!
              </p>
              <p>
                From the text you upload, our AI creates a Study Set complete
                with the Summary plus Flashcards and a Quiz for you to study
                with. We do that by using an image a book, an academic journal
                pdf or anything really, and our engines do the rest!
              </p>
              <p>Upload a file to see for yourself.</p>
            </div>
          </div>
          <div class="form-step__btns">
            <div class="form-step__edit">
              <span>ready to summarize?</span>
              <button
                class="form-step__btn"
                type="button"
                data-toggle="modal"
                data-target="#editText"
              >
                edit text
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3662 3.23185L20.7638 0.638516C19.874 -0.241484 18.429 -0.241484 17.5459 0.638516L2.72104 15.4052C2.69428 15.4318 2.67421 15.4518 2.65414 15.4785C2.64745 15.4852 2.64745 15.4918 2.64076 15.4985C2.62738 15.5185 2.60731 15.5385 2.59393 15.5652C2.58724 15.5718 2.58724 15.5785 2.58055 15.5852C2.56717 15.6052 2.55379 15.6252 2.5471 15.6518C2.54041 15.6585 2.54041 15.6718 2.53372 15.6785C2.52703 15.6985 2.51365 15.7185 2.50696 15.7452C2.50696 15.7518 2.50027 15.7518 2.50027 15.7585L0.0183103 22.7052C-0.102108 23.0452 -0.0151396 23.4252 0.239078 23.6785C0.419706 23.8585 0.660543 23.9518 0.901381 23.9518C1.00842 23.9518 1.11546 23.9318 1.21581 23.8985L8.1934 21.4318C8.20009 21.4318 8.20009 21.4252 8.20678 21.4252C8.22685 21.4185 8.24692 21.4052 8.27368 21.3985C8.28037 21.3918 8.29375 21.3918 8.30044 21.3852C8.32051 21.3718 8.34058 21.3652 8.36734 21.3518C8.37403 21.3452 8.38072 21.3452 8.38741 21.3385C8.40748 21.3252 8.42755 21.3118 8.44762 21.2918C8.45431 21.2852 8.461 21.2852 8.46769 21.2785C8.49445 21.2585 8.52121 21.2385 8.54128 21.2118L20.8909 8.90518L23.3662 6.43852C24.2559 5.55185 24.2559 4.11852 23.3662 3.23185ZM2.44675 21.4852L3.77136 17.7785L6.16635 20.1652L2.44675 21.4852ZM7.87898 19.2252L4.70795 16.0718L15.733 5.09852L18.904 8.25852L7.87898 19.2252ZM22.0416 5.10518L20.2286 6.91852L17.0576 3.75852L18.8705 1.95852C19.0244 1.80518 19.2786 1.80518 19.4392 1.95852L22.0416 4.55185C22.1419 4.65185 22.162 4.77185 22.162 4.83185C22.162 4.89185 22.1486 5.00518 22.0416 5.10518Z"
                    fill="#009051"
                  />
                </svg>
              </button>
            </div>
            <div class="button__container form-button__container">
              <button type="button" class="button" @click.prevent="next()">
                yes, summarize now
              </button>
              <button
                type="button"
                class="button button-black"
                @click.prevent="prev()"
              >
                no, go back and reupload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="step-log form-step" v-if="activeStep === 4">
        <div class="step-log__title">summary created!</div>
        <div class="step-log__row">
          <div class="step-log__prg">
            <div class="step-log__prg-back"></div>
            <b> summary </b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              faucibus lectus phasellus etiam aliquet malesuada. Venenatis,
              aenean tellus facilisi amet, id pretium phasellus nullam id.
              Ornare sagittis, rutrum eu duis. Feugiat et lectus enim id. Proin
              imperdiet adipiscing rhoncus consectetur non. Id risus aliquet
              lacus ultrices imperdiet at ut amet laoreet. Pellentesque
              vestibulum, convallis in blandit. Vulputate convallis netus id
              arcu enim lectus vestibulum. Egestas massa pretium sit lacus massa
              porta.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              faucibus lectus phasellus etiam aliquet malesuada. Venenatis,
              aenean tellus facilisi amet, id pretium phasellus nullam id.
              Ornare sagittis, rutrum eu duis. Feugiat et lectus enim id. Proin
              imperdiet adipiscing rhoncus consectetur non. Id risus aliquet
              lacus ultrices imperdiet at ut amet laoreet. Pellentesque
              vestibulum, convallis in blandit. Vulputate convallis netus id
              arcu enim lectus vestibulum. Egestas massa pretium sit lacus massa
              porta
            </p>
          </div>
          <div class="step-log__block">
            <h3 class="step-log__title">
              <b> You’re almost there! </b>
              Create an account for FREE and get access to our suite of
              features!
            </h3>
            <div class="button__container" @click.prevent="next()">
              <a class="button" href="singup.html"> get started! </a>
            </div>
            <div class="summarize__link">
              Already have an account? <a href="login.html">LOG IN</a> now.
              &nbsp; :)
            </div>
          </div>
        </div>
      </div>
      <div class="form-step step-log" v-if="activeStep === 5">
        <div class="step-log__title">
          summary created now save it and start studying!
        </div>
        <div class="step__row">
          <div class="step-log__prg">
            <b> your summary </b>
            <p>
              Agriculture is the process of domesticating plants - the Neolithic
              Revolution, also called the Agricultural Revolution, was when
              humans first started to grow their own food. This meant that
              people didn’t have to hunt and gather their food anymore. Instead,
              they could grow it themselves on farms. This was the beginning of
              civilization. The Ice Age was a period of time when the Earth was
              colder. People could not grow crops during the Ice Age, but they
              could after the Ice Age ended. Ristvet says the warming trend of
              the Holocene made it possible for people to grow crops, because it
              made the land warmer and more stable. The warming also changed the
              habitats of the animals people hunted for food. She says that when
              the Ice Age ended, the animals that people hunted for food started
              to die out. This made it harder for people to get food. It also
              made sense for people to grow their own food. In the past, humans
              used to live as hunter-gatherers. But then people in some parts of
              the world started growing their own food on farms. They grew
              wheat, rye, barley and millet in West Asia, and they grew potatoes
              in the Andes. Then other people saw how good it was to grow their
              own food, and they started farming too. This shows people were
              ready to farm when the climate was right.
            </p>
          </div>
          <div class="form-step__finish">
            <h5 class="form-step__finish-title">
              ready to name and save summary?
            </h5>
            <div class="step-form__group">
              <label for="title" class="step-form__label">book title*</label>
              <input
                type="text"
                id="title"
                class="step__input form-input"
                v-model.trim="info.title"
              />
            </div>
            <div class="step-form__group">
              <label for="author" class="step-form__label">author(s)*</label>
              <input type="text" id="author" class="step__input form-input" />
            </div>
            <p class="step-form__label">chapter number and name*</p>
            <div class="step-form__groups">
              <div class="step-form__group step-form__group-number">
                <input type="number" id="numb" class="step__input form-input" />
                <small class="step-form__muted">number</small>
              </div>
              <div class="step-form__group">
                <input type="text" id="name" class="step__input form-input" />
                <small class="step-form__muted">name</small>
              </div>
            </div>
            <div class="step-form__group">
              <label class="step-form__label">curriculum*</label>
              <div class="step__select">
                <span class="myarrow"></span>
                <select>
                  <option>Кофе</option>
                  <option>Чай</option>
                  <option>Вода</option>
                  <option value="" hidden disabled selected></option>
                </select>
              </div>
            </div>
            <div class="step-form__group">
              <label class="step-form__label">topic*</label>
              <div class="step__select">
                <span class="myarrow"></span>
                <select>
                  <option>Кофе</option>
                  <option>Чай</option>
                  <option>Вода</option>
                  <option value="" hidden disabled selected></option>
                </select>
              </div>
            </div>
            <div class="rating__subtitle">
              how is our algorithm doing?*
              <span> five star rating </span>
            </div>
            <div class="rating-area">
              <input type="radio" id="star-5" name="rating" value="5" />
              <label for="star-5" title="Оценка «5»"></label>
              <input type="radio" id="star-4" name="rating" value="4" />
              <label for="star-4" title="Оценка «4»"></label>
              <input type="radio" id="star-3" name="rating" value="3" />
              <label for="star-3" title="Оценка «3»"></label>
              <input type="radio" id="star-2" name="rating" value="2" />
              <label for="star-2" title="Оценка «2»"></label>
              <input type="radio" id="star-1" name="rating" value="1" />
              <label for="star-1" title="Оценка «1»"></label>
            </div>
            <div class="button__container form-button__container">
              <button
                type="button"
                class="button"
                @click.prevent="next()"
                :disabled="!formReady"
              >
                yes, save now
              </button>
              <button
                type="button"
                class="button button-black"
                @click.prevent="prev()"
              >
                no, go back and reupload
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div
      class="modal fade modal__form-edit"
      id="editText"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal">
            <svg
              width="26"
              height="26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.73 13.235l9.048-9.211a1.99 1.99 0 000-2.78 1.906 1.906 0 00-2.73 0L13 10.456 3.952 1.244a1.906 1.906 0 00-2.73 0 1.99 1.99 0 000 2.78l9.048 9.211-9.048 9.212a1.99 1.99 0 000 2.78c.364.37.858.582 1.352.582.494 0 .988-.185 1.352-.582L13 16.015l9.048 9.212c.364.37.858.582 1.352.582.494 0 .988-.185 1.352-.582a1.99 1.99 0 000-2.78l-9.022-9.212z"
                fill="#009051"
              />
            </svg>
          </button>
          <h5 class="filter__title">edit summary</h5>
          <div class="modal-body">
           <textarea name="texts" class="form-step__prg" v-model="inputValue">
            </textarea>
          </div>
          <div class="button__container">
            <button type="button" class="button" data-dismiss="modal">
              save changes
            </button>
            <button
              type="button"
              class="button button-black"
              data-dismiss="modal"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data: () => ({
    inputValue: "some text",
    activeStep: 1,
    formSteps: [],
    imageData: "",
    info: {
      title: "",
      author: "",
      number: "",
      name: "",
      curriculum: "",
      topic: "",
      rating: "",
    },
    formDone: false,
  }),
  computed: {
    formReady() {
      return Object.values(this.info).every((val) => val !== "");
    },
  },
  methods: {
    previewImage: function (event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
          this.activeStep++;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    onInput(event) {
      this.$emit("input", event.target.value);
    },
    prev() {
      this.activeStep--;
    },
    next() {
      this.activeStep++;
    },
    submit() {
      alert("Submit to blah and show blah and etc.");
    },
  },
};
</script>