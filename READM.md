// ======useEffect- запускает функцию каждый раз, когда определенный набор данных изменится, setVicible можно
// передать как props
// ======Чтобы решить следует ли вызывать хук useEffect или нет можно предать аргумент массив, хук будет вызыватся
// только когда обновляется [value], если значение [value] не изменялось то хук не вызовет функцию (console.log("мимо"))
// в массив можно передать несколько значений и если хоть одно из них изменилось useEffect будет вызван.

// =======>componentDidMount=> Если передать пустой массив вторым значением то функция
// вызавится только один раз, как в =>componentDidMount=>,

// =======>componentDidUpdate=> Если мы не передаем [массив] в качестве второго аргумента в useEffect то функция будет
// вызыватся каждый раз когда компонент обновляется как =>componentDidUpdate=> но! последний не вызывается первый
//раз когда компонент только создан, useEffect же вызывается и при содании впервые

// =======>componentWillUnmount=> ОЧистка Эффекта (например остановить таймер) НУжно вернуть еще одну функцию из useEffect
// (пример. return () => {console.log('clear')} ) как в =>componentWillUnmount=>,например компонент скрывается через 5
//секунд setTimeout, но его скрыли раньше кнопкой, setTimeout висит в памяти ждет. если
// return ()=> clearInterval(setTimeout)эта функция вызовется когда нажмется кнопка скрыть компонент, и завершит
//setTimeout досрочно без утечек памяти

// ====== Если не передать ничего то useEffect будет вызыватся на каждое обновление компонента