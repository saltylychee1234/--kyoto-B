const StageApp = Vue.createApp({
  data() {
    return {
      /* 送信ボタン上下に表示されるメッセージ */
      okMessage: '正解！',
      ngMessage: 'そのキーワードは違うようだぞ！？',
      /* 解答 */
      stage1CorrectAnswer: 'なんばんぼうえき',
      stage2CorrectAnswer: 'あじさい',
      stage3CorrectAnswer: 'すいれん',
      stage4CorrectAnswer: "ほんのうじ",

      /* stage1 */
      stage1Answer: false, // 正解かどうか
      stage1: '',          // インプットエリアの入力の値
      stage1Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage1Clear: false,  // ステージクリア

      /* stage2 */
      stage2Answer: false, // 正解かどうか
      // stage202Answer: false,
      // stage203Answer: false,
      // stage204Answer: false,
      stage2: '',          // インプットエリアの入力の値
      // stage202: '',
      // stage203: '',
      // stage204: '',
      stage2Message: '',  // 送信ボタン上下に表示されるメッセージ
      // stage202Message: '',
      // stage203Message: '',
      // stage204Message: '',
      stage2Clear: false,  // ステージクリア

      /* stage3 */
      stage3Answer: false, // 正解かどうか
      stage3: '',        // インプットエリアの入力の値
      stage3Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage3Clear: false, // ステージクリア

      // stage4
      stage4Answer: false,
      stage4: "",
      stage4Message: "",
      stage4Clear: false
    }
  },
  methods: {
    /* stage1の入力を判定します */
    stage1AnswerInput(stage1) {
      if(stage1 === this.stage1CorrectAnswer) {
        this.stage1Answer = true;
        this.stage1Message = '';
      } else {
        this.stage1Answer = false;
        this.stage1Message = this.ngMessage; 
      }
    },
    /* stage1のクリア画面の動作を設定します */
    stage1NextStage() {
      this.stage1Answer = false;
      this.stage1Clear = true;
    },
    /* stage2の入力を判定します */
    stage2AnswerInput(stage2) {
      if(stage2 === this.stage2CorrectAnswer) {
        this.stage2Answer = true;
        this.stage2Message = this.okMessage;
      } else {
        this.stage2Answer = false;
        this.stage2Message = this.ngMessage;
      }
    },

    /* stage2のクリア画面の動作を設定します */
    stage2NextStage() {
      this.stage2Answer = false;
      this.stage2Clear = true;
    },
    /* stage3の入力を判定します */
    stage3AnswerInput(stage3) {
      if(stage3 === this.stage3CorrectAnswer) {
        this.stage3Answer = true;
        this.stage3Message = '';
      } else {
        this.stage3Answer = false;
        this.stage3Message = this.ngMessage;
      }
    },
    stage3NextStage() {
      this.stage3Answer = false;
      this.stage3Clear = true;
    },
    
    // stage4の入力を判定
    stage4AnswerInput(stage4) {
      if(stage4 === this.stage4CorrectAnswer) {
        this.stage4Answer = true;
        this.stage4Message = '';
        window.location.href = 'final.html';
      } else {
        this.stage4Answer = false;
        this.stage4Message = this.ngMessage;
      }
    }
  }
}).mount('#stage')
