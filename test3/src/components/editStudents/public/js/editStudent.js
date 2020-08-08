import { mapActions } from 'vuex';
export default {
    name: 'editStudent',
    data() {
        return {
            name: this.$store.state.Student.name,
            age: this.$store.state.Student.age,
            sex: this.$store.state.Student.sex,
            address: this.$store.state.Student.address,
            classs: this.$store.state.Student.classs,
            score: this.$store.state.Student.score
        }
    },
    methods: {
        ...mapActions(['editStudent']),
        submit(){
            this.editStudent({ id: this.$store.state.Student.id, name: this.name, age: this.age, sex: this.sex, address: this.address, classs: this.classs, score: this.score });
        }
        // submit(e) {
        //     e.preventDefault();
        //     this.editStudent({ id: this.$store.state.Student.id, name: this.name, age: this.age, sex: this.sex, address: this.address, classs: this.classs, score: this.score });
        //     console.log(this.name);
        // }
    },
}