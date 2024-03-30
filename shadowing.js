function func() {
    var a = 'Hello';
    let b = 10;

    if (true) {
        var a = "Bye";  //var to let (shadowing a variable)
        let b = 20;  // let to var (illegal shadowing a variable )
        console.log(a);
        // console.log(b);

    }
}

func();