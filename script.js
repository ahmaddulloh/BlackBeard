const page = document.getElementById('page').value;
if (page == "login") {
    document.getElementById('error_uname').style.display = 'none';
    document.getElementById('error_upass').style.display = 'none';

    const uname = document.getElementById('uname');
    const upass = document.getElementById('upass');
    var btn_login = document.getElementById('btn_login');

    btn_login.addEventListener("click", function () {
        console.log(uname.value);
        console.log(upass.value);
        if (uname.value == "trusth17") {
            if (upass.value == "gaming") {
                window.location = 'home.html';
            } else {
                document.getElementById('error_upass').style.display = 'block';
            }
        } else {
            document.getElementById('error_uname').style.display = 'block';
        }
    });
} else if (page == "registrasi") {

    document.getElementById('error_uname').style.display = 'none';
    document.getElementById('error_pass').style.display = 'none';
    document.getElementById('error_cari').style.display = 'none';
    document.getElementById('error_minpass').style.display = 'none';
    document.getElementById('error_notmatch').style.display = 'none';
    document.getElementById('cocok').style.display = 'none';

    const data = [
        {
            'nim': '0110221338',
            'nama': 'Ahmad Dulloh',
            'prodi': 'Teknik Informatika'
        },
        {
            'nim': '2110221339',
            'nama': 'Asep Bokir',
            'prodi': 'Teknik Design'
        },
        {
            'nim': '1110221340',
            'nama': 'Katak BizNet',
            'prodi': 'Teknik Informasi'
        }
    ];
    console.log(data);

    var cari = document.getElementById('cari');
    cari.addEventListener('keyup', function () {
        let nama = document.getElementById('nama');
        let prodi = document.getElementById('prodi');
        for (let i = 0; i < data.length; i++) {
            const element = data[i].nim.slice(0, this.value.length);
            if (this.value == element) {
                nama.value = data[i].nama;
                prodi.value = data[i].prodi;
            } if (this.value == '') {
                nama.value = '';
                prodi.value = '';
            }
        }


    });

    var btn_daftar = document.getElementById('btn_daftar');
    btn_daftar.addEventListener('click', function () {
        var uname = document.getElementById('uname');
        var pass = document.getElementById('pass');
        var repass = document.getElementById('repass');

        var check = true;

        if (uname.value == '') {
            document.getElementById('error_uname').style.display = 'block';
            check = false;
        } if (pass.value == '') {
            check = false;
        } if (repass.value == '') {
            check = false;
        }

        if (check == true) {
            alert('pendaftaran sukses');
            window.location = 'login.html';
        }
    });

    var pass = document.getElementById('pass');
    pass.addEventListener('keyup', function () {
        if (pass.value == '') {
            document.getElementById('pass').style.display = 'block';
            document.getElementById('div_repass').innerHTML = '';
            repass.value = '';
        } else {
            if (pass.value.length < 6) {
                document.getElementById('error_minpass').style.display = 'block';
                document.getElementById('div_repass').innerHTML = '';
            } else {
                document.getElementById('div_repass').innerHTML = `<div class="input-group mb-3" id="re_pass">
                <input type="password" class="form-control" placeholder="cek password" name="repass" id="repass">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>`;
              var repass = document.getElementById('repass');
                if (pass.value == repass.value) {
                    document.getElementById('cocok').style.display = 'block';
                    document.getElementById('error_notmatch').style.display = 'none';
                } else {
                    document.getElementById('error_notmatch').style.display = 'block';
                    document.getElementById('div_repass').innerHTML = `<div class="input-group mb-3" id="re_pass">
                    <input type="password" class="form-control" placeholder="cek password" name="repass" id="repass">
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>`;

                  var repass = document.getElementById('repass');
                }
            }
        }
    });
}
