class Rectangle {
    static corners = 4
    static count = 0
    static howMany(){
        return this.count;
    }

    constructor(width, height){
        this.width = width
        this.height = height
        Rectangle.count += 1
    }

    area(){
        return this.width * this.height;
    }

    perimeter(){
        return 2 * (this.width + this.height);
    }
}

module.exports = { Rectangle }