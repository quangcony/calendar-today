

const day_number = document.querySelector('#day-number');
const month = document.querySelector('#month')
const day = document.querySelector('#day');
const year = document.querySelector('#year');

const time = document.querySelector('#time');

const holiday_name = document.querySelector('#holiday-name');

const btnShow = document.querySelector('#btn-show')
const viewSelect = document.querySelector('#view-select');

const day_of_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const holidays = [
    {
        d: '1/1',
        name: 'Tết dương lịch'
    },
    {
        d: '14/2',
        name: 'Lễ tình nhân (Valentine)'
    },
    {
        d: '27/2',
        name: 'Ngày thầy thuốc Việt Nam'
    },
    {
        d: '8/3',
        name: 'Ngày Quốc tế Phụ nữ'
    },
    {
        d: '20/3',
        name: 'Ngày Quốc tế Hạnh phúc'
    },
    {
        d: '26/3',
        name: 'Ngày thành lập Đoàn TNCS Hồ Chí Minh'
    },
    {
        d: '1/4',
        name: 'Ngày Cá tháng Tư'
    },
    {
        d: '30/4',
        name: 'Ngày giải phóng miền Nam'
    },
    {
        d: '1/5',
        name: 'Ngày Quốc tế Lao động'
    },
    {
        d: '7/5',
        name: 'Ngày chiến thắng Điện Biên Phủ'
    },
    {
        d: '13/5',
        name: 'Ngày của mẹ'
    },
    {
        d: '19/5',
        name: 'Ngày sinh chủ tịch Hồ Chí Minh'
    },
    {
        d: '1/6',
        name: 'Ngày Quốc tế thiếu nhi'
    },
    {
        d: '17/6',
        name: 'Ngày của cha'
    },
    {
        d: '21/6',
        name: 'Ngày báo chí Việt Nam'
    },
    {
        d: '28/6',
        name: 'Ngày gia đình Việt Nam'
    },
    {
        d: '11/7',
        name: 'Ngày dân số Thế Giới'
    },
    {
        d: '27/7',
        name: 'Ngày thương binh liệt sĩ'
    },
    {
        d: '28/7',
        name: 'Ngày thành lập công đoàn Việt Nam'
    },
    {
        d: '19/8',
        name: 'Ngày tổng khởi nghĩa'
    },
    {
        d: '2/9',
        name: 'Ngày Quốc Khánh nước Việt Nam'
    },
    {
        d: '10/9',
        name: 'Ngày thành lập Mặt trận Tổ quốc Việt Nam'
    },
    {
        d: '1/10',
        name: 'Ngày quốc tế người cao tuổi'
    },
    {
        d: '10/10',
        name: 'Ngày giải phóng thủ đô'
    },
    {
        d: '13/10',
        name: 'Ngày doanh nhân Việt Nam'
    },
    {
        d: '20/10',
        name: 'Ngày phụ nữ Việt Nam'
    },
    {
        d: '31/10',
        name: 'Ngày Halloween'
    },
    {
        d: '9/11',
        name: 'Ngày pháp luật Việt Nam'
    },
    {
        d: '19/11',
        name: 'Ngày Quốc tế Nam giới'
    },
    {
        d: '20/11',
        name: 'Ngày Nhà giáo Việt Nam'
    },
    {
        d: '23/11',
        name: 'Ngày thành lập hội chứ thập đỏ Việt Nam'
    },
    {
        d: '1/12',
        name: 'Ngày thế giới phòng chống AIDS'
    },
    {
        d: '19/12',
        name: 'Ngày toàn quốc kháng chiến'
    },
    {
        d: '22/12',
        name: 'Ngày thành lập quân đội nhân dân Việt Nam'
    },
    {
        d: '24/12',
        name: 'Ngày lễ Giáng sinh'
    }
]

const view_modes = ['Full', 'Today']

const app = {

    renderCalendarToday: function() {

        const curr_day = new Date()

        day_number.textContent = curr_day.getDate()
        month.textContent = months[curr_day.getMonth()]
        day.textContent = day_of_week[curr_day.getDay()]
        year.textContent = curr_day.getFullYear()

        const day_month = curr_day.getDate()+'/'+ (curr_day.getMonth() + 1)

        const holiday = holidays.find(holiday => holiday.d === day_month)
        holiday_name.textContent = holiday? holiday.name : ''

        this.showTime()

        view_modes.forEach((mode, i) => {
            const item = document.createElement('li')
            item.classList.add(`view-item`)
            item.textContent = mode

            item.onclick = (e) => {
                
            }

            viewSelect.appendChild(item)
        })

    },

    initTime: function() {
        const date = new Date()

        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()

        time.textContent = h + ':' + m + ':' + s

    },

    showTime: function() {

        setInterval(() => {
            this.initTime()
        }, 1000);

    },

    createCalendar: function() {
        this.renderCalendarToday()

    },

    start: function() {
        // light mode change
        document.querySelector('#toggle').onclick = () => {
            document.body.classList.toggle('light')
        }

        btnShow.onclick = () => {
            btnShow.classList.toggle('active')
            viewSelect.classList.toggle('active')
        }

        this.createCalendar()
    }

}

app.start()



