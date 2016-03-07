$(document).ready( function() {
  'use strict';

    var pieces = {
    "R" : "&#9820;",
    "N" : "&#9822;",
    "B" : "&#9821",
    "Q" : "&#9819",
    "K" : "&#9818",
    "P" : "&#9823",
    "r" : "&#9814",
    "n" : "&#9816",
    "b" : "&#9815",
    "q" : "&#9813",
    "k" : "&#9812",
    "p" : "&#9817",
  };


 var board = [
  ["R",'N','B','Q','K','B','N',"R"],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

// Inserts all the variables into the board in html using jQuery
// // $(“.className”).html(“content”);
// Needs function to loop array?

  $("#00").html(pieces.R);
  $("#01").html(pieces.N);
  $("#02").html(pieces.B);
  $("#03").html(pieces.Q);
  $("#04").html(pieces.K);
  $("#05").html(pieces.B);
  $("#06").html(pieces.N);
  $("#07").html(pieces.R);
  $("#10").html(pieces.P);
  $("#11").html(pieces.P);
  $("#12").html(pieces.P);
  $("#13").html(pieces.P);
  $("#14").html(pieces.P);
  $("#15").html(pieces.P);
  $("#16").html(pieces.P);
  $("#17").html(pieces.P);

// On click of step forward button show pawn move up two spaces

  $(".btn-step-forward").click(function() {
       $("#63").html("");
       $("#43").html(pieces.p);
      console.log("GIVER");
  });
  $(".btn-step-back").click(function() {
      $("#43").html("");
      $("#63").html(pieces.p);
  });


    }); //This ends the file

// Some logic around the first move. Take kings pawn and move to spaces forward
// console.log(board.join('\n') + '\n\n');
// // Move King's Pawn forward 2
// board[4][4] = board[6][4];
// board[6][4] = ' ';
// console.log(board.join('\n'));

// Key of html code for the pieces
//   var blackrook= "&#9820";
//   var blacknight= "&#9822";
//   var blackbishop= "&#9821";
//   var blackqueen= "&#9819";
//   var blackking= "&#9818";
//   var blackpawn= "&#9823";
