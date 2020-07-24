import { mapActions } from 'vuex';
export default {
    name: 'addStudent',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addStudent']),
        submit(e) {
            e.preventDefault();
            this.addStudent(this.title);
        }
    },
}