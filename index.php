<?php include_once('assets/php/structure.php');
open_html("Score Keeper");
?>

<div class="container">
    <div class="content">

        <div class="navigation">
            <div class="navigation-item secondary-bg inline-block">
                Home
            </div>
            <div class="navigation-item inline-block">
                Teams
            </div>
            <div class="navigation-item inline-block">
                Score
            </div>
            <div class="navigation-item inline-block">
                View
            </div>
            <div class="navigation-item inline-block">
                Clear
            </div>
        </div>
        <div id="home" class="section"><br><br><br>
            <h1>Welcome to the Score Keeper</h1>
            <h3>To begin, click "Teams" above</h3>
            <b>About Score Keeper</b>
            <p>Score Keeper is a free to use score keeping tool developed by Non-Artistic Art.<br>Users can use the web application to keep scores for a variety of competitions. The tools provided by the web app include:-<br></p>
            <ul>
                <li>Adding new teams</li>
                <li>Deleting existing teams</li>
                <li>Custom points management</li>
                <li>Printing scores</li>
            </ul>
            <p>We're always keen to improve the application. If there is any functionality that you would like us to add, feel free to get in touch with us at info@nonartyart.co.za</p>
        </div>
        <div id="teams" class="section hide">
            <h1>Add a new team</h1>
            <div class="team-item"><input type='text' id='new-team' class="input-field" placeholder="New team">
            <div onclick="add_team();" class='button success-bg inline-block'>Add</div></div>

            <h1>A list of all current teams</h1>
            <div id="teams-list"></div>
        </div>
        <div id="score" class="section hide"><br>
            <div class="team-item">
                Points per subtract:
                <input type='text' id='points-to-subtract' class="points" value='0'>
                Points per add:
                <input type='text' id='points-to-add' class="points" value='0'>
                Points per bonus:
                <input type='text' id='bonus-points-to-add' class="points" value='0'>
            </div><br><br><br>
            <div class='team-item'><div class=' button inline-block'><b>MINUS</div><div class='team-name inline-block'>TEAM NAME</div><div class='points inline-block'>POINTS</div><div class=' button inline-block'>ADD</div><div class='button inline-block'>BONUS</b></div></div>
            <br><div id="teams-list-with-all"></div>
        </div>
        <div id="view" class="section hide">
        <div class='team-item'><div class='team-name inline-block'><b>TEAM NAME</b></div><div class='points inline-block'><b>POINTS</b></div></div>
        <div id="teams-list-with-points"></div>
            <div class='button secondary-bg inline-block' onclick="save();">Print</div>
        </div>
        <div id="clear" class="section hide">   
            <h1>Is the round finished?</h1>
            <h3>Clear all data by clicking button below:</h3>
            <p class='danger-txt'>Make sure that you have save all the data first as this action cannot be undone!</p>
            <div class='button danger-bg inline-block' onclick="new_round();">Clear</div>
        </div>


    </div>
</div>

<?php
close_html();
?>