<template>
  <div>
    <div>
      <h3 :style="{ backgroundColor: 'skyblue' }">Using v-html</h3>
      <div>{{ greet }} {{ name }}</div>
      <div v-html="greet"></div>
    </div>
    <hr />
    <div>
      <h3 :style="{ backgroundColor: 'skyblue' }">Styles</h3>
      <h1 class="underline">Heading</h1>
      <h4 :class="isPromoted && 'promoted'">Promoted movie</h4>
      <h4 :class="isNew ? 'new' : 'soldout'">New Movie</h4>
      <h4 :class="['new', 'promoted']">Newly Promoted</h4>
      <h4 :class="[isPromoted && 'promoted', isSoldout && 'soldout']">Array conditional movie</h4>
      <h4 :style="{ color: highlightColor, fontSize: headerSize + 'px', padding: '20px' }">Inline Style</h4>
      <h4 :style="headerStyleObject">Style Object</h4>
    </div>
    <hr />

    <div>
      <h3 :style="{ backgroundColor: 'skyblue' }">Conditional rendering</h3>
      <h4 v-if="num === 0">The number is zero</h4>
      <h4 v-else-if="num < 0">The number is negative</h4>
      <h4 v-else-if="num > 0">The number is positive</h4>
      <h4 v-else>Not a number</h4>
      <div>

        <h3 :style="{ backgroundColor: 'skyblue' }">List Rendering</h3>
        <div>
          <h4 :style="{ backgroundColor: 'silver' }">Strings</h4>
          <h4 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h4>
          <hr />
          <div v-for="name in names" :key="name">
            <h4 v-if="name === 'Arathi'">{{ name }}</h4>
          </div>
        </div>
        <div>
          <h4 :style="{ backgroundColor: 'silver' }">Objects</h4>

          <h4 v-for="names in fullname" :key="names">{{ names.firstName }} {{ names.lastName }}
            <hr />
          </h4>
        </div>

        <div>
          <h4 :style="{ backgroundColor: 'silver' }">Arrays</h4>

          <div v-for="(actor) in actors" :key="actor.name" class="actor-container">
            <ui class="ui" :style="{ color: 'cyan' }">
              {{ actor.name }}
            </ui>
            <ul class="movie-list">
              <li :style="{ color: 'yellowgreen' }" v-for="movie in actor.movies" :key="movie">
                {{ movie }}
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>
    <h4>My Details</h4>

    <p :style="{ color: 'slategray' }" v-for="(value, index) in myInfo" :key="value">
      {{ index }} : {{ value }}</p>
    <div>
      <h3 :style="{ backgroundColor: 'skyblue' }">Methods</h3>
      <h4>
        sum - {{ add(3, 5) }}
      </h4>
      <h4>5 multiply 6 - {{ multiply(6) }}</h4>
    </div>
    <h3 :style="{ backgroundColor: 'skyblue' }">Event Handling</h3>
    <h3>{{ count }}</h3>
    <button @click="increment(1)">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="increment(5)">Increment by 5</button>

  </div>
  <div>
    <h3 :style="{ backgroundColor: 'skyblue' }">Form Handling</h3>

    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre>
  </div>
  <form @submit.prevent="formSubmit" class="form-container">
    <div>
      <label for="name">Name:</label><br>
      <input type="text" id="name" v-model.lazy="formValues.name">

    </div>
    <div>
      <label for="age">age:</label><br>
      <input @keyup.enter="formSubmit" type="number" id="age" v-model="formValues.age">

    </div>
    <div>
      <label for="profileSummary">Profile Summary:</label><br>
      <textarea id="profile" v-model="formValues.profileSummary"></textarea>

    </div>
    <div>
      <label for="country">country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="Japan">Japan</option>

      </select>
    </div>
    <div>
      <label for="job-locations">Job Location</label>
      <select id="job-locations" multiple v-model="formValues.jobLocations">
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="Japan">Japan</option>

      </select>
    </div>
    <div>
      <input type="checkbox" id="remote-work" v-model="formValues.remoteWork" true-value="yes" false-value="no" />
      <label>Open to remote?</label>
    </div>
    <div>
      <label>Skill Set</label>
      <input type="checkbox" id="html" value="html" v-model="formValues.skillSet">
      <label for="html">HTML</label>
      <input type="checkbox" id="css" value="css" v-model="formValues.skillSet">
      <label for="css">CSS</label>
      <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet">
      <label for="javascript">javascript</label>
    </div>
    <div>
      <label>Years of Experience</label>
      <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience">
      <label for="0-2">0-2</label>
      <input type="radio" id="2-4" value="2-4" v-model="formValues.yearsOfExperience">
      <label for="2-4">2-4</label>
      <input type="radio" id="4+" value="4+" v-model="formValues.yearsOfExperience">
      <label for="4+">4+</label>
    </div>
    <div>
      <button class="form-button">submit</button>
    </div>
  </form>
  <div :style="{ padding: '1rem' }"></div>
  <div>
    <h3 :style="{ backgroundColor: 'skyblue' }">Computed properties</h3>

    <input :style="{ padding: '1rem', margin: 'auto' }" v-model="newName" type="text" id="newName">
    <button @click="changeName(newName)">Change name</button>
    <h4>Full Name - {{ fullName }}</h4>
    <button @click="items.push({ id: 4, title: 'Fridge', price: 30000, })">add item</button>
    <h4>Total Price - {{ totalPrice }}</h4>
    <h4 :style="{ color: 'brown' }">Items with price greater than 50000</h4>
    <h4 :style="{ color: 'chartreuse' }" v-for="items in itemsGreaterThan50k" :key="items.id">{{ items.title }} {{
      items.price
    }}</h4>
  </div>
  <div>
    <h3 :style="{ backgroundColor: 'skyblue' }">Watchers</h3>

    <h3 :style="{ color: 'blueviolet' }">Volume (0-20)</h3>
    <div class="volume">
      <button class="btn" @click="volume -= 2">-</button>
      <h2> {{ volume }} </h2>
      <button class="btn" @click="volume += 2">+</button>


    </div>
    <input type="text" v-model="movie">
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      movie: "Ozler",
      volume: 0,
      newName: "",
      greet: "<b>Hello</b>",
      name: "Arathi",
      isPromoted: true,
      isNew: true,
      isSoldout: true,
      highlightColor: 'orange',
      headerSize: 50,
      headerStyleObject: {
        color: 'orange',
        fontSize: '50px',
        padding: '20px'
      },
      num: 'ghs',
      names: ["Arathi", "Amrutha", "Aparna"],
      fullname: [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Jane", lastName: "Smith" },
        { firstName: "Emily", lastName: "Nichols" },
      ],
      actors: [
        { name: "Mohanlal", movies: ['neru', 'drishyam', 'oppam'] },
        { name: "Fahadh fasil", movies: ['banglore days', 'njan prakashan', 'malik', 'athiran'] },
        { name: "Dulquer Salmaan", movies: ["usthad hotel", "abcd", 'king of kotha'] },

      ],
      myInfo:
        { Name: "Arathi", Age: "14 years old", Place: 'Kozhikode' },
      baseMultiplier: 5,
      count: 0,
      formValues: {
        name: '',
        age: null,
        profileSummary: '',
        country: '',
        jobLocations: [],
        remoteWork: "no",
        skillSet: [],
        yearsOfExperience: ''
      },
      firstName: "Marse",
      lastName: "Vayn",
      items: [
        {
          id: 1,
          title: "TV",
          price: 30000
        },
        {
          id: 2,
          title: "Mobile",
          price: 80000
        },
        {
          id: 3,
          title: "Laptop",
          price: 60000
        }
      ]
    }
  },
  methods: {
    add(a, b) {
      return a + b
    },
    multiply(a) {
      return a * this.baseMultiplier
    },
    increment(num) {
      return this.count += num
    },
    decrement() {
      return this.count -= 1
    },
    formSubmit() {
      alert(`You submitted the form with ${this.formValues.name}`)
      console.log("FormValues:", this.formValues);
    },
    changeName(name) {
      this.fullName = name
    }

  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(value) {
        const names = value.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    },
    totalPrice() {
      return this.items.reduce((total, curr) => (total = total + curr.price), 0)
    },
    itemsGreaterThan50k() {
      return this.items.filter(item => item.price > 50000)
    }
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue === 20) {
        alert("You've reached the maximum volume! Please turn down the volume.")
      } else if (newValue === 0) {
        alert("Warning: Volume is at low setting. Please increase volume.")
      }
      else if (newValue > oldValue && newValue === 16) {
        alert("Maximum volume will harmfull. Please reduce volume.")
      }

    },
    movie: {
      handler(newmovie) {
        console.log(`Calling api with movie name ${newmovie}`);
      },
      immediate: true,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline {
  text-decoration: underline;
}

.volume {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 50px;
  border: solid yellowgreen;
  margin: auto;
  padding: 1px;

}

.btn {
  border-radius: .5rem;
  cursor: pointer;


}

.promoted {
  font-style: italic;
}

.new {
  color: olivedrab;
}

.soldout {
  color: darkred;
}

.filmColor {
  color: olive;
}

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}

input+label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-container {
  max-width: 400px;
  margin: 0 auto;
  background-color: #abc1da;
  padding: 5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.form-button {
  padding: .5rem;
  background-color: #142333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  min-width: 100px;

}

button:hover {
  background-color: #44515f;
}

.actor-container {
  margin-bottom: 20px;
}

.ui{
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
}

.movie-list {
  list-style-type: none;
  padding: 0;
}

.movie-list li {
  font-size: 14px;
  margin-bottom: 4px;
}
</style>
