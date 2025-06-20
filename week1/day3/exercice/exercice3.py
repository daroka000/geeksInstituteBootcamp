class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics  # Stocke la liste des paroles

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


lyr = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])


lyr.sing_me_a_song()
