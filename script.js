const app = new Vue({
    el: '#root',
    data: {
        indexItems: 0,
        arrCity: 
        [
            {
                name: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore        eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                img: '01.jpg'
            },
            {
                name: 'Svizzera',
                text: 'Lorem ipsum',
                img: '02.jpg'
            },
            {
                name: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                img: '03.jpg'
            },
            {
                name: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                img: '04.jpg'
            },
            {
                name: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                img: '05.jpg'
            }
        ]
    },
    methods: {
        previus() {
            this.indexItems == 0 ? this.indexItems = this.arrCity.length - 1 : this.indexItems--;
        },

        next() {
            this.indexItems == this.arrCity.length -1 ? this.indexItems = 0 : this.indexItems++; 
        },
    },
    created() {
        setInterval(this.next, 3000);
    }
})