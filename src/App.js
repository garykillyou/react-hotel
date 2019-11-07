import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage, FormattedDate, FormattedTime, FormattedRelativeTime } from 'react-intl';
import PropTypes from 'prop-types';

// 從 props 取得從 index 傳入的 setLocale 方法
function App({ setLocale }) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {/* 建立2顆按鈕可以切換 local 的狀態 */}
          <button onClick={() => setLocale('en')}>English</button>
          <button onClick={() => setLocale('zh-TW')}>中文</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* 使用 FormattedMessage */}
          <FormattedMessage id="app.learn" values={{ name: 'React' }} />
        </a>
        <br />
        {/*<!-- 使用多語系的日期格式 -->*/}
        <FormattedDate
          value={new Date()}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
        <br />
        {/*<!-- 使用多語系的時間格式 -->*/}
        <FormattedTime value={new Date()} />
        <br />
        <FormattedRelativeTime value={0} numeric="auto" updateIntervalInSeconds={1} />
      </header>
    </div>
  );
}

App.propTypes = {
  setLocale: PropTypes.func
};

export default App;
