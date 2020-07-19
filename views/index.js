module.exports = function() {
    return /*html*/ `
    <div class="grey darken-3 index-container">
      <h1  class="grey-text index-header">
      <i class="material-icons medium purple-text text-lighten-2">check_circle</i>
      2DO
      </h1>
      <form action="/create" method="POST" class="form">
        <div class="input-field center-align" style="width:90%;">
          <input id="task" name="task" type="text" placeholder="Task">
          <label for="task">Task</label>
        </div>
        <button type="submit" class="btn grey darken-2 grey-text text-lighten-2 waves-effect">
          SUBMIT TASK
        </button>
      </form>
    </div>
  `
}